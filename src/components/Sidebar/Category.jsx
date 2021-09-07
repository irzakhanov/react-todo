import React from "react";
import classNames from "classnames";

function Category({
  _id,
  title,
  onSelectList,
  activeList,
  count,
  openSettings,
  onDeleteList,
}) {
  const handleClick = () => {
    onSelectList(_id);
  };

  const handleDeleteClick = () => {
    if (window.confirm("Вы уверены?")) {
      onDeleteList(_id);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={classNames("category", {
        active: _id === activeList,
      })}
    >
      {openSettings && (
        <button onClick={handleDeleteClick} className="category__delete">
          <svg
            height="12pt"
            viewBox="0 0 512 512"
            width="12pt"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0"
              fill="#f44336"
            />
            <path
              d="m350.273438 320.105469c8.339843 8.34375 8.339843 21.824219 0 30.167969-4.160157 4.160156-9.621094 6.25-15.085938 6.25-5.460938 0-10.921875-2.089844-15.082031-6.25l-64.105469-64.109376-64.105469 64.109376c-4.160156 4.160156-9.621093 6.25-15.082031 6.25-5.464844 0-10.925781-2.089844-15.085938-6.25-8.339843-8.34375-8.339843-21.824219 0-30.167969l64.109376-64.105469-64.109376-64.105469c-8.339843-8.34375-8.339843-21.824219 0-30.167969 8.34375-8.339843 21.824219-8.339843 30.167969 0l64.105469 64.109376 64.105469-64.109376c8.34375-8.339843 21.824219-8.339843 30.167969 0 8.339843 8.34375 8.339843 21.824219 0 30.167969l-64.109376 64.105469zm0 0"
              fill="#fafafa"
            />
          </svg>
        </button>
      )}
      <p className="category__name">{title}</p>
      <div className="category__count">{count}</div>
    </div>
  );
}

export default Category;
