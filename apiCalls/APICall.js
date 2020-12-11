const dataURL = "https://dragoon-19bde-default-rtdb.firebaseio.com/"

export const getAll = () => {
    return fetch(`${dataURL}db.json`)
    .then(response => response.json()
)
}

// export const updateDragooList = 