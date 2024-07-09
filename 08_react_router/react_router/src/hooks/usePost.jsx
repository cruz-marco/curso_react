
export async function usePost (data, url) {
    const pst = await fetch(url ,{
                method: 'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(data)
            })
        }