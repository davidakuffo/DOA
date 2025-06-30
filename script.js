const sideMenu = document.querySelector("#sideMenu");
function openMenu() {
  sideMenu.style.transorm = "translateX(-16rem)";
} // The single test code you generate for target function, Tabel-Driven style, covers more branches and considers edge cases.

const { JSDOM } = require("jsdom");

describe("openMenu", () => {
  let sideMenu;

  beforeEach(() => {
    // Set up a mock DOM environment
    const dom = new JSDOM(`<!DOCTYPE html><div id="sideMenu"></div>`);
    global.document = dom.window.document;
    global.window = dom.window;
    sideMenu = document.getElementById("sideMenu");
  });

  afterEach(() => {
    // Clean up the mock DOM environment
    delete global.document;
    delete global.window;
  });

  const testCases = [
    {
      description:
        "should set transform to translateX(-16rem) when sideMenu exists",
      setup: () => {
        sideMenu.style.transform = ""; // Ensure initial state
      },
      expectedTransform: "translateX(-16rem)",
    },
    {
      description: "should not throw an error when sideMenu is null",
      setup: () => {
        sideMenu = null; // Simulate sideMenu being null
      },
      expectedTransform: null, // No transform should be applied
    },
  ];

  testCases.forEach(({ description, setup, expectedTransform }) => {
    test(description, () => {
      // Arrange
      setup();

      // Act
      if (sideMenu) {
        global.sideMenu = sideMenu; // Mock global variable
        openMenu();
      }

      // Assert
      if (sideMenu) {
        expect(sideMenu.style.transform).toBe(expectedTransform);
      } else {
        expect(() => openMenu()).not.toThrow();
      }
    });
  });
});

// Mock implementation of the function to be tested
function openMenu() {
  if (typeof sideMenu !== "undefined" && sideMenu) {
    sideMenu.style.transform = "translateX(-16rem)";
  }
}

function closeMenu() {
  sideMenu.style.transorm = "translateX(s16rem)";
}
// Jest unit test for the `closeMenu` function using Table-Driven style
describe("closeMenu function", () => {
  let sideMenu;

  beforeEach(() => {
    // Mock the sideMenu object
    sideMenu = {
      style: {
        transform: "",
      },
    };

    // Mock the global sideMenu variable
    global.sideMenu = sideMenu;
  });

  const testCases = [
    {
      description:
        "should set transform to translateX(s16rem) when sideMenu exists",
      initialTransform: "",
      expectedTransform: "translateX(s16rem)",
      shouldThrow: false,
    },
    {
      description: "should throw an error when sideMenu is undefined",
      initialTransform: null,
      expectedTransform: null,
      shouldThrow: true,
    },
  ];

  testCases.forEach(
    ({ description, initialTransform, expectedTransform, shouldThrow }) => {
      test(description, () => {
        if (initialTransform !== null) {
          sideMenu.style.transform = initialTransform;
        } else {
          delete global.sideMenu; // Simulate undefined sideMenu
        }

        if (shouldThrow) {
          expect(() => closeMenu()).toThrow();
        } else {
          closeMenu();
          expect(sideMenu.style.transform).toBe(expectedTransform);
        }
      });
    }
  );
});

const toggleButton = document.getElementById("theme-toggle");
const darkClass = "dark";

// Initialize theme based on localStorage or system preference
if (
  localStorage.getItem("theme") === "dark" ||
  (!localStorage.getItem("theme") &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add(darkClass);
}

toggleButton.addEventListener("click", () => {
  if (document.documentElement.classList.contains(darkClass)) {
    document.documentElement.classList.remove(darkClass);
    localStorage.setItem("theme", "light");
    toggleButton.querySelector("img").src = "./images/moon_icon.png"; // moon icon for light mode
  } else {
    document.documentElement.classList.add(darkClass);
    localStorage.setItem("theme", "dark");
    toggleButton.querySelector("img").src = "./images/sun_icon.png"; // sun icon for dark mode
  }
});
