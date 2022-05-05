import React from "react";
import "./Repository.css";
import Spinner from "../spinner/spinner";
import {useSelector} from "react-redux";

function Repository() {
  //get the current date
  const time1 = new Date();

  //get user repo state from redux
  const {repository, loginloading} = useSelector(state => ({
    ...state.app,
  }));

  return (
    <>
      <div>
        {!loginloading ? (
          repository.map(repo => {
            return (
              <div key={repo.id} className="Reposit">
                <div>
                  <div className="flex">
                    <p className="Reposit__h1">{repo.name}</p>
                    <p className="Reposit__h3">{repo.description}</p>
                    <span className="Reposit__h3">{repo.visibility}</span>
                  </div>
                  <div className="flex Reposit__h2">
                    <p>{repo.language ? repo.language : "Forked"}</p>
                    {/* convert the github ISOstring to date and subtract from current time , divide by
                    86400000 milliseconds , which is equivalent to one day . Trunc is used to get Intger number only . */}
                    <p>
                      Updated{" "}
                      {Math.trunc(
                        (time1 - new Date(repo.updated_at)) / 86400000
                      )}{" "}
                      days ago
                    </p>
                  </div>
                </div>

                <div className="Reposit__btn">
                  <button type="button" className="btn">
                    <span className="btn__svg">
                      <svg
                        aria-hidden="true"
                        height="16"
                        viewBox="0 0 16 16"
                        version="1.1"
                        width="16"
                        data-view-component="true"
                        className="svg__container"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
                        ></path>
                      </svg>
                    </span>
                    <span className="star">Star</span>
                    <div className="divider"></div>
                    <span className="triangle-icon"></span>
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <Spinner />
        )}
      </div>
    </>
  );
}

export default Repository;
