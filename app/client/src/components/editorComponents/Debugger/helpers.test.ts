import { getDependenciesFromInverseDependencies } from "./helpers";

describe("getDependencies", () => {
  it("Check if getDependencies returns in a correct format", () => {
    const input = {
      "Button1.text": ["Input1.defaultText", "Button1"],
      "Input1.defaultText": ["Input1.text", "Input1"],
      "Input1.inputType": ["Input1.isValid", "Input1"],
      "Input1.text": ["Input1.isValid", "Input1.value", "Input1"],
      "Input1.isRequired": ["Input1.isValid", "Input1"],
      "Input1.isValid": ["Button1.isVisible", "Input1"],
      "Button1.isVisible": ["Button1"],
      Button1: ["Chart1.chartName"],
      "Chart1.chartName": ["Chart1"],
      "Input1.value": ["Input1"],
    };
    const output = {
      directDependencies: ["Input1"],
      inverseDependencies: ["Input1", "Chart1"],
    };

    expect(
      getDependenciesFromInverseDependencies(input, "Button1"),
    ).toStrictEqual(output);
  });
});
