import { Link } from "react-router-dom";
import "./list.css";
import Chart from "../../components/chart/Chart"
import { productData } from "../../dummyData"
import { Publish } from "@material-ui/icons";
import { useLocation } from "react-router-dom";

export default function Product() {
    const location = useLocation();
    const list = location.list;

    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">List</h1>
                <Link to="/newlist">
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
            {list && <div className="productTop">
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <span className="productName">{list.title}</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">{list._id}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">genre:</span>
                            <span className="productInfoValue">{list.genre}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">type:</span>
                            <span className="productInfoValue">{list.type}</span>
                        </div>
                    </div>
                </div>
            </div>}
            <div className="productBottom">
                <form className="productForm">
                    {list && <div className="productFormLeft">
                        <label>List Title</label>
                        <input type="text" placeholder={list.title} />
                        <label>Type</label>
                        <input type="text" placeholder={list.type} />
                        <label>Genre</label>
                        <input type="text" placeholder={list.genre} />
                    </div>}
                    <div className="productFormRight">
                        <button className="productButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
