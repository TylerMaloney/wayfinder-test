/**
 * @summary Analytic Endpoint for Project Wayfinder, collects usage information
 *          from opt-in users.
 * @author LocalNewsTV
 */
import express from 'express';
import { takeAnalytic, getAnalytic } from '../controllers/analytic-controller';

const router = express.Router();

router.route('/analytic')
  .post(takeAnalytic)
  .get(getAnalytic);

export default router;
