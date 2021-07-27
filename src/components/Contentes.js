/*eslint-disable */

import { useEffect, useState } from "react";

import React from "react";
import axios from "axios";

const arraySort = require("array-sort"); //other fangfa

const Contents = () => {
  //   let [글제목, 글제목변경] = useState(["gender", "name"]);

  //   function 제목변경() {
  //     let newArray = [...글제목]; //복사본 만들기..deep copy해서 만든다.
  //     newArray[0] = "gender";
  //     글제목변경(newArray);
  //   }

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await axios.get(
        "https://cors-anywhere.herokuapp.com/https://5c92dbfae7b1a00014078e61.mockapi.io/owners"
      );
      //console.log(res.data);
      const userList = res.data;
      console.log(arraySort(userList, "name"));

      //console.log(arraySort(userList, "pets.name"));
      // console.log(JSON.stringify(userList[name]));

      // function compare(prop) {
      //   return function (a, b) {
      //     return a[prop].localeCompare(b[prop]);
      //   };
      // }

      // var result = arraySort(userList, function (a, b) {
      //   return a.gender.localeCompare(b.name);
      // });

      // console.log(result);

      // userList.sort((a, b) =>
      //   a.gender < b.gender ? -1 : a.gender > b.gender ? 1 : 0
      // );
      // console.log(userList);

      // userList[userList.length - 1].pets.sort((a, b) =>
      //   a.name < b.name ? -1 : a.name > b.name ? 1 : 0
      // );

      // console.log(userList[userList.length - 1].pets);

      // var sortOption = {
      //   name: true,
      //   gender: true,
      //   age: true,
      //   pets: true,
      // };

      // function sort123(sortField) {
      //   if (sortField) {
      //     userList = userList.sort((a, b) =>
      //       a.sortField < b.sortField ? -1 : a.sortField > b.sortField ? 1 : 0
      //     );
      //   } else {
      //     userList = userList.sort((a, b) =>
      //       a.sortField < b.sortField ? 1 : a.sortField > b.sortField ? -1 : 0
      //     );
      //   }

      //   renderTable(userList);
      // }

      function renderTable(data) {
        var oTable = document.querySelector("table>tbody");

        var h = [];
        data.forEach((item) => {
          h.push("<tr>");

          h.push(`<td>${item.gender}</td>`);
          h.push(`<td>${item.name}</td>`);

          h.push(`<td>${item.pets}</td>`);
          console.log(JSON.stringify(`${item.pets}`));

          h.push("</tr>");
        });

        oTable.innerHTML = h.join("");
      }

      renderTable(userList);
    };

    fetchEvents();
  }, []);

  return (
    <section>
      <h5>按照性别显示，字母名字列表</h5>
      <div className='container'>
        <div>
          <table class='table table-bordered table-sm'>
            <thead>
              <tr>
                <td>gender</td>
                <td>name</td>
                <td>pets</td>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Contents;
