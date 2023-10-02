import React from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/Myselect";

function PostFilter({ filter, setFilter }) {
  return (
    <div>
      <MyInput
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        placeholder="Поиск..."
      />
      <MySelect
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultName="Сортировка"
        options={[
          { value: "title", name: "по названию" },
          { value: "body", name: "по описанию" },
        ]}
      />
    </div>
  );
}

export default PostFilter;
