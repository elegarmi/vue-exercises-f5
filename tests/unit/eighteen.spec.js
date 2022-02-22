import { shallowMount } from "@vue/test-utils";
import ExerciseEighteen from "@components/exercises/ExerciseEighteen";

let wrapper = null;

beforeEach(() => {
  wrapper = shallowMount(ExerciseEighteen);
});

afterEach(() => {
  wrapper.destroy();
});

test("ExerciseEighteen", () => {
  expect(wrapper.reportCard(6)).toBe("Good");
});

// import { shallowMount } from "@vue/test-utils";
// import ExerciseEighteen from "@components/ExerciseEighteen";

// let wrapper = null;

// beforeEach(() => {
//   wrapper = shallowMount(ExerciseEighteen);
// });

// afterEach(() => {
//   wrapper.destroy();
// });

// describe("ExerciseEighteen", () => {
//   it("note report num", () => {
//     const result = wrapper.findAll("#result");
//     expect((wrapper.setData({ result: 'Merit' })).toBe(Merit),
//   });
// });

// import { shallowMount } from "@vue/test-utils";
// import ExerciseEighteen from "@components/exercises/ExerciseEighteen";

// let wrapper = null;

// beforeEach(() => {
//   wrapper = shallowMount(ExerciseEighteen);
// });

// afterEach(() => {
//   wrapper.destroy();
// });

// test("ExerciseEighteen", async () => {
//   const input = wrapper.findAll("#num-input");

//   await input.setValue(8);

//   expect(input.element.value).toBe(8);
// });
