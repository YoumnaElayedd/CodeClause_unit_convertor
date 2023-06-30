const convertBtn = document.getElementById("convert-btn");

convertBtn.addEventListener("click", () => {
  const fromValue = parseFloat(document.getElementById("from").value);
  const fromUnit = document.getElementById("from-unit").value;
  const toUnit = document.getElementById("to-unit").value;
  let result;

  if (fromUnit === "meter") {
    if (toUnit === "meter") {
      result = fromValue;
    } else if (toUnit === "kilometer") {
      result = fromValue / 1000;
    } else if (toUnit === "centimeter") {
      result = fromValue * 100;
    } else if (toUnit === "inch") {
      result = fromValue * 39.37;
    } else if (toUnit === "foot") {
      result = fromValue * 3.281;
    } else if (toUnit === "mile") {
      result = fromValue / 1609;
    }
  } else if (fromUnit === "kilometer") {
    if (toUnit === "meter") {
      result = fromValue * 1000;
    } else if (toUnit === "kilometer") {
      result = fromValue;
    } else if (toUnit === "centimeter") {
      result = fromValue * 100000;
    } else if (toUnit === "inch") {
      result = fromValue * 39370.1;
    } else if (toUnit === "foot") {
      result = fromValue * 3280.84;
    } else if (toUnit === "mile") {
      result = fromValue / 1.609;
    }
  } else if (fromUnit === "centimeter") {
    if (toUnit === "meter") {
      result = fromValue / 100;
    } else if (toUnit === "kilometer") {
      result = fromValue / 100000;
    } else if (toUnit === "centimeter") {
      result = fromValue;
    } else if (toUnit === "inch") {
      result = fromValue / 2.54;
    } else if (toUnit === "foot") {
      result = fromValue / 30.48;
    } else if (toUnit === "mile") {
      result = fromValue / 160934.4;
    }
  } else if (fromUnit === "inch") {
    if (toUnit === "meter") {
      result = fromValue / 39.37;
    } else if (toUnit === "kilometer") {
      result = fromValue / 39370.1;
    } else if (toUnit === "centimeter") {
      result = fromValue * 2.54;
    } else if (toUnit === "nch") {
      result = fromValue;
    } else if (toUnit === "foot") {
      result = fromValue / 12;
    } else if (toUnit === "mile") {
      result = fromValue / 63360;
    } else if (fromUnit === "foot") {
      if (toUnit === "meter") {
        result = fromValue / 3.281;
      } else if (toUnit === "kilometer") {
        result = fromValue / 3280.84;
      } else if (toUnit === "centimeter") {
        result = fromValue * 30.48;
      } else if (toUnit === "inch") {
        result = fromValue * 12;
      } else if (toUnit === "foot") {
        result = fromValue;
      } else if (toUnit === "mile") {
        result = fromValue / 5280;
      }
    }
  } else if (fromUnit === "mile") {
    if (toUnit === "meter") {
      result = fromValue * 1609;
    } else if (toUnit === "kilometer") {
      result = fromValue * 1.609;
    } else if (toUnit === "entimeter") {
      result = fromValue * 160934.4;
    } else if (toUnit === "inch") {
      result = fromValue * 63360;
    } else if (toUnit === "foot") {
      result = fromValue * 5280;
    } else if (toUnit === "mile") {
      result = fromValue;
    }
  }

  document.getElementById("to").value = result.toFixed(2);
});
