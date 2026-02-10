import { validateSingleKey } from "../utils/validator.js";
import {
  fibonacci,
  filterPrimes,
  computeLCM,
  computeHCF
} from "../services/math.service.js";
import { askAI } from "../services/ai.service.js";

const EMAIL = "shubh3933.beai23@chitkara.edu.in";

export const healthHandler = (req, res) => {
  return res.status(200).json({
    is_success: true,
    official_email: EMAIL
  });
};

export const bajajHandler = async (req, res, next) => {
  try {
    const key = validateSingleKey(req.body);

    let result;

    switch (key) {
      case "fibonacci":
        result = fibonacci(req.body.fibonacci);
        break;
      case "prime":
        result = filterPrimes(req.body.prime);
        break;
      case "lcm":
        result = computeLCM(req.body.lcm);
        break;
      case "hcf":
        result = computeHCF(req.body.hcf);
        break;
      case "AI":
        result = await askAI(req.body.AI);
        break;
    }

    return res.status(200).json({
      is_success: true,
      official_email: EMAIL,
      data: result
    });

  } catch (err) {
    next(err);
  }
};
