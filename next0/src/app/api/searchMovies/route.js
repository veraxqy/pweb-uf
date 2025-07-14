export async function GET(request){
    const searchParams = request
    const titleSearchKey = searchParams.get("titleSearchKey")
    const httpRes = await fetch(`http://www.omdbapi.com/?apikey=f1cbc41e&s=${titleSearchKey}`)
    const jsonRes = await httpRes.json()
    return Response.json({...jsonRes}) 
}