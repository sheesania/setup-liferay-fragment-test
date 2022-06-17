const { screen } = require("@testing-library/dom");
const setupLiferayFragmentTest = require("./index.js");

const testConfiguration = { numberOfTabs: 4 };

describe("setup-liferay-fragment-test", () => {
  beforeAll((done) => {
    setupLiferayFragmentTest(__dirname, testConfiguration, "mock-namespace", done);
  });

  it("loads CSS", () => {
    const firstTab = screen.getAllByText("Hello I am a tab")[0];
    expect(getComputedStyle(firstTab).color).toBe("blue");
  });

  it("loads HTML, including Freemarker directives and variable substitutions", () => {
    const tabs = screen.getAllByRole("tabpanel");
    expect(tabs.length).toBe(4);
    expect(tabs[0].getAttribute("data-fragment-namespace")).toBe("mock-namespace");
    expect(tabs[0].getAttribute("id")).toBe("tabPanel1");
  });

  it("passes appropriate globals to JS", () => {
    expect(fragmentElement).toBeDefined();
    expect(fragmentNamespace).toBe("mock-namespace");
    expect(configuration).toBe(testConfiguration);
  });

  it("loads JS", () => {
    expect(configuration.testMainWasLoaded).toBe(true);
  });
})
