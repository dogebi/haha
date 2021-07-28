/*eslint-disable */
import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { useEffect } from "react";

const arraySort = require("array-sort"); //other fangfa

const Contents = () => {
  useEffect(() => {
    const fetchEvents = async () => {
      const res = await axios.get("https://cors-anywhere.herokuapp.com/http://5c92dbfae7b1a00014078e61.mockapi.io/owners");
      //"https://cors-anywhere.herokuapp.com/http://5c92dbfae7b1a00014078e61.mockapi.io/owners"
      //console.log(res.data);
      var userList = res.data;
      console.log(arraySort(userList, "gender"));

      function shoot(sortField) {
        alert([sortField]);
        userList.sort((a, b) =>
          a[sortField] < b[sortField] ? -1 : a[sortField] > b[sortField] ? 1 : 0
        );
      }
      //shoot("pets.name");
      console.log(userList);

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

      function renderTable(data) {
        var oTable = document.querySelector("table>tbody");

        var h = [];
        data.forEach((item) => {
          h.push("<tr>");

          h.push(`<td>${item.gender}</td>`);
          h.push(`<td>${item.name}</td>`);
          //item.pets.forEach((element) => h.push(`<td>${element.name}</td>`));

          //console.log(Object.values(item.pets));
          try {
            item.pets.forEach((element) => h.push(`<td>${element.type}</td>`));
            item.pets.forEach((element) => console.log(element.type));
          } catch (error) {}
          //item.pets.forEach((element) => console.log(element.name));
          //h.push(`<td>${item.pets}</td>`);

          //h.push(`<td>${item.age}</td>`);

          h.push("</tr>");
        });

        oTable.innerHTML = h.join("");
      }

      renderTable(userList);
    };

    fetchEvents();
  }, []);

  var sortOption = {
    name: true,
    gender: true,
    age: true,
    pets: true,
  };

  function sort123(sortField) {
    alert(sortField);
    if (sortOption[sortField]) {
      userList = userList.sort((a, b) =>
        a[sortField] < b[sortField] ? -1 : a[sortField] > b[sortField] ? 1 : 0
      );
    } else {
      userList = userList.sort((a, b) =>
        a[sortField] < b[sortField] ? 1 : a[sortField] > b[sortField] ? -1 : 0
      );
    }

    sortOption[sortField] = !sortOption[sortField];

    renderTable(userList);
  }

  return (
    <section>
      <p>
        need to write some code to consume the json and output a list of all the
        cats in alphabetical order under a heading of the gender of their owner.
      </p>

      <div className='container'>
        <div>
          <table className='table table-bordered table-dark table-hover table-sm'>
            <thead>
              <tr>
                <td>GENDER</td>
                <td>NAME</td>
                <td>PETS</td>
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
