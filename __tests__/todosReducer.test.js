import { addTodo } from "../src/actions/index";
import todos from "../src/store/todos";

describe("todos reducer", () => {
  it("should handle ADD_TODO", () => {
    expect(
      todos(
        [],
        addTodo({
          _id: "1566235508139",
          title: "Add unit test for logics",
          updatedAt: 1566235508136,
          isComplete: false, // NEW | DONE
        })
      )
    ).toEqual([
      {
        _id: "1566235508136",
        title: "Complete Todo Application",
        updatedAt: 1566235508136,
        isComplete: false, // NEW | DONE
      },
      {
        _id: "1566235508139",
        title: "Add unit test for logics",
        updatedAt: 1566235508136,
        isComplete: false, // NEW | DONE
      },
    ]);
  });
});
