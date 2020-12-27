import { useEffect, useState } from 'react'

let URL = 'https://api.nasa.gov/planetary/apod?api_key=Xj1Bavdb6geFjFzbzXnPr0r7XCk0hl3L5vnzfzIT'

const useHttp = (date) => {
    const [fetchedData, setFetchedData] = useState(null)

    useEffect(() => {
        fetch(URL + '&date=' + date)
        .then(Response => {
            if(!Response) {
                return
            }
            return Response.json()
        }).then(data => {
            setFetchedData(data)
        })
    }, [date])

    return fetchedData
} 

export default useHttp;