import React, { createContext, useReducer, useContext } from 'react';
import {
    formatUserActivity,
    formatUserData,
    formatAverageSessions,
    formatUserPerformance
} from '../utils/dataFormatters';
import { API_ENDPOINTS } from '../utils/apiConfig';

// État initial
const initialState = {
    userId: null,
    userData: null,
    activity: null,
    averageSessions: null,
    performance: null,
    loading: false,
    error: null,
};

// Actions
const CHANGE_USER_ID = 'CHANGE_USER_ID';
const FETCH_USER_DATA_REQUEST = 'FETCH_USER_DATA_REQUEST';
const FETCH_USER_DATA_SUCCESS = 'FETCH_USER_DATA_SUCCESS';
const FETCH_USER_DATA_FAILURE = 'FETCH_USER_DATA_FAILURE';

// Réducteur
const reducer = (state, action) => {
    switch (action.type) {
        case CHANGE_USER_ID:
            return { ...state, userId: action.payload };
        case FETCH_USER_DATA_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_USER_DATA_SUCCESS:
            return { ...state, loading: false, ...action.payload };
        case FETCH_USER_DATA_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

// Créer le contexte
const StoreContext = createContext();

// Hook personnalisé pour utiliser le store
export const useStore = () => useContext(StoreContext);

// Composant Provider
export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <StoreContext.Provider value={{ state, dispatch }}>
            {children}
        </StoreContext.Provider>
    );
};

// Fonction pour changer l'ID utilisateur
export const changeUserId = (dispatch, newUserId) => {
    dispatch({ type: CHANGE_USER_ID, payload: newUserId });
    fetchData(dispatch, newUserId);
};

// Fonction pour récupérer les données
const fetchData = async (dispatch, userId) => {
    dispatch({ type: FETCH_USER_DATA_REQUEST });

    try {
        const [userDataResponse, activityResponse, averageSessionsResponse, performanceResponse] = await Promise.all([
            fetch(API_ENDPOINTS.USER_MAIN_DATA(userId)),
            fetch(API_ENDPOINTS.USER_ACTIVITY(userId)),
            fetch(API_ENDPOINTS.USER_AVERAGE_SESSIONS(userId)),
            fetch(API_ENDPOINTS.USER_PERFORMANCE(userId))
        ]);

        const userData = await userDataResponse.json();
        const activityData = await activityResponse.json();
        const averageSessionsData = await averageSessionsResponse.json();
        const performanceData = await performanceResponse.json();

        const formattedData = {
            userData: formatUserData(userData.data),
            activity: formatUserActivity(activityData.data),
            averageSessions: formatAverageSessions(averageSessionsData.data),
            performance: formatUserPerformance(performanceData.data),
        };

        dispatch({ type: FETCH_USER_DATA_SUCCESS, payload: formattedData });
    } catch (error) {
        dispatch({ type: FETCH_USER_DATA_FAILURE, payload: error.message });
    }
};