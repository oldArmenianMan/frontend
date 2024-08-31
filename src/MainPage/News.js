
import NewsList from "../components/NewsList";
import OtherNewsList from "../components/OtherNewsList";


function News()
{
    return (
        <>
            <div className="newsBody">
                <div className="mainNews">
                    <NewsList/>
                </div>
                <div className="otherNews">
                    <h2>Этот день в истории</h2>
                    <OtherNewsList/>
                </div>
            </div>
        </>
    )
}

export default News;