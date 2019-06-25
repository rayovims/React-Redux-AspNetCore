import getAD from '../apis/getAD';

export const searchAD = group => async dispatch => {
    let response;
    if (group === undefined) {
        response = await getAD.get(`/group`);
    } else {
        response = await getAD.get(`/group/${group}`);
    }
    dispatch({ type: "SEARCH_AD", payload: response.data});
}

export const browseAD = () => async dispatch => {
    const response = await getAD.get("/SampleData/WeatherForecasts");
    dispatch({ type: "BROWSE_AD", payload: response.data});
}

export const selectButton = (value) => {
    return {
        type: 'BTN_VALUE',
        payload: value
    }
}

export const selectRadio = (value) => {
    return {
        type: "RADIO_VALUE",
        payload: value
    }
}