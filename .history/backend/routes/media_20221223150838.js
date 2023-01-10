const express = require("express");
const router = express.Router();
const Media = require("../models/Media");
const { body, validationResult } = require("express-validator");
const fetchuser = require("../middleware/fetchuser");


