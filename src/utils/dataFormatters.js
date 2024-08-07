
export const formatUserActivity = (activities, userId) => {
    const userActivity = activities.find(activity => activity.userId === userId);
    if (!userActivity) {
      return [];
    }
  
    return userActivity.sessions.map(session => ({
      day: session.day,
      kilogram: session.kilogram,
      calories: session.calories,
    }));
  };

  export const formatUserAverageSessions = (sessions, userId) => {
    const dayMap = {
        1: 'L',
        2: 'M',
        3: 'M',
        4: 'J',
        5: 'V',
        6: 'S',
        7: 'D'
    };
    const userSessions = sessions
      .filter(session => session.userId === userId)
      .map(session => session.sessions.map(s => ({
        day: dayMap[s.day] || s.day,
        sessionLength: s.sessionLength
      })));
  
    return userSessions.length ? userSessions[0] : [];
  };
  

  export const formatUserPerformance = (performances, userId) => {
    const userPerformance = performances
      .filter(performance => performance.userId === userId)
      .map(performance => performance.data.map(p => ({
        kind: performance.kind[p.kind],
        value: p.value
      })));
      
  
    return userPerformance.length ? userPerformance[0] : [];
  };
  

export const formatUserMainData = (userData) => {
    return {
        id: userData.id,
        userInfos: userData.userInfos,
        todayScore: userData.todayScore || userData.score, 
        keyData: userData.keyData,
    };
};
