export const formatUserActivity = (data) => {
    if (!data || !Array.isArray(data.sessions)) {
        console.error("data.sessions n'est pas un tableau:", data);
        return [];
    }

    return data.sessions.map(session => ({
        day: session.day,
        kilogram: session.kilogram,
        calories: session.calories,
    }));
};

export const formatAverageSessions = (data) => {
    const dayMap = {
        1: 'L',
        2: 'M',
        3: 'M',
        4: 'J',
        5: 'V',
        6: 'S',
        7: 'D'
    };

    if (!data || !Array.isArray(data.sessions)) {
        console.error("data.sessions n'est pas un tableau:", data);
        return [];
    }

    return data.sessions.map(session => ({
        day: dayMap[session.day] || session.day,
        sessionLength: session.sessionLength,
    }));
};

export const formatUserPerformance = (data) => {
    if (!data || !Array.isArray(data.data)) {
        console.error("data.data n'est pas un tableau:", data);
        return [];
    }

    return data.data.map(p => ({
        kind: p.kind,
        value: p.value,
    }));
};

export const formatUserData = (userData) => {
    return {
        id: userData.id,
        userInfos: userData.userInfos,
        todayScore: userData.todayScore || userData.score,
        keyData: userData.keyData,
    };
};