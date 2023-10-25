// let accounts = require('../../accounts');
const Account = require("../../models/Accounts");

exports.accountCreate = async (req, res) => {
  try {
    const newAccount = await Account.create(req.body);
    res.status(201).json(newAccount);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.getAllAcounts = async (req, res) => {
  try {
    const accounts = await Account.find({});
    res.json(accounts);
  } catch (error) {
    res.status(500).json({ error: "error" });
  }
};
exports.accountDelete = async (req, res) => {
  try {
    const { accountId } = req.params;
    const foundAccount = await Account.findById(accountId);
    if (foundAccount) {
      await foundAccount.deleteOne();
      res.status(204).end();
    } else {
      res.status(404).json({ error: "Account doesn't exist" });
    }
  } catch (error) {
    res.status(500).json({ error: "error" });
  }
};

exports.accountUpdate = async (req, res) => {
  try {
    const { accountId } = req.params;
    const foundAccount = await Account.findById(accountId);
    if (foundAccount) {
      await foundAccount.updateOne(req.body);
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Account not found as JSON" });
    }
  } catch (error) {
    res.status(500).json({ error: "error" });
  }
};

exports.accountsGet = (req, res) => {
  res.json(accounts);
};

exports.getAccountByUsername = (req, res) => {
  const { username } = req.params;
  const foundAccount = accounts.find(
    (account) => account.username === username
  );
  if (req.query.currency === "usd") {
    const accountInUsd = { ...foundAccount, funds: foundAccount.funds * 3.31 };
    res.status(201).json(accountInUsd);
  }
  res.status(201).json(foundAccount);
};
