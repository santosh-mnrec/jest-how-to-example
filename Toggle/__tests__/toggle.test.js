const toggle=require("../toggle");
const $=require("jquery");

describe("Toggle", () => {
    it("It should call click handler", async () => {
      document.body.innerHTML = ` <ul id="accordion">
      <li>
        <div>Sports</div>
        <ul>
          <li><a href="#">Golf</a></li>
          <li><a href="#">Cricket</a></li>
          <li><a href="#">Football</a></li>
        </ul>
      </li>
      </ul>
      `;
      const spy = jest.spyOn(toggle, "clickHandler");
      toggle.attach(); // attach handlers
      $("div").trigger("click");
      $("div").trigger("click");
  
      return new Promise((res, rej) => {
        expect(spy).toBeCalledTimes(2);
        res();
      });
    });
  });