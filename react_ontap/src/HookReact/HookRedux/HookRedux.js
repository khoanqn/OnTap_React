import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function HookRedux(props) {
  const [state, setState] = useState({ name: "", content: "" });
  //Lấy dữ liệu về Redux
  const { arrContent } = useSelector(
    (rootReducer) => rootReducer.FakeBookAppReducer
  );
  //useDispatch: đưa dữ liệu lên Redux
  const dispatch = useDispatch();

  const handleChangeInput = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    const action = {
      type: "COMMENT",
      userComment: state,
    };
    dispatch(action);
  };

  return (
    <div className="container">
      <h3 className="mt-2">Facebook App</h3>
      <div className="card">
        <div className="card-header">
          {arrContent.map((user, index) => {
            return (
              <div className="row" key={index}>
                <div className="col-2">
                  <img
                    src={`https://i.pravatar.cc?u=${user.name}`}
                    alt="..."
                    width={50}
                    height={50}
                  />
                </div>
                <div className="col-8">
                  <p className="text-danger font-weight-bold">{user.name}</p>
                  <p>{user.content}</p>
                </div>
              </div>
            );
          })}
        </div>
        <form className="card-body " onSubmit={handleSubmit}>
          <div className="form-group">
            <p>Name</p>
            <input
              onChange={handleChangeInput}
              name="name"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <p>Content</p>
            <input
              onChange={handleChangeInput}
              name="content"
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
