export const getTests = async (req, res) => {
  const db = req.app.locals.db; // Access DB from app.locals

  try {
    const tests = await db
      .collection("test")
      .find({ userId: req.auth.sub }) // only return tests for the authenticated user
      .toArray();
    res.json(tests);
  } catch (error) {
    res.json({ success: false, error: "Failed to fetch tests" });
  }

};

export const addTest = async (req, res) => {
  const db = req.app.locals.db; // Access DB from app.locals
  const data = { ...req.body, userId: req.auth.sub }; // associate with Auth0 user
  try {
    const result = await db.collection("test").insertOne(data);
    res.json(result);
  } catch (error) {
    res.json({ success: false, error: "Failed to add test" });
  }
};
