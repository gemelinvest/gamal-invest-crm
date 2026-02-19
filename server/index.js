import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

function validateIsraeliID(id) {
  if (!/^\d{9}$/.test(id)) return false;

  let sum = 0;
  for (let i = 0; i < 9; i++) {
    let num = Number(id[i]) * ((i % 2) + 1);
    if (num > 9) num -= 9;
    sum += num;
  }
  return sum % 10 === 0;
}

function calculateAge(birthDate) {
  const diff = Date.now() - new Date(birthDate).getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
}

app.post("/validate-id", (req, res) => {
  const { id } = req.body;
  res.json({ valid: validateIsraeliID(id) });
});

app.post("/calculate-age", (req, res) => {
  const { birthDate } = req.body;
  res.json({ age: calculateAge(birthDate) });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
