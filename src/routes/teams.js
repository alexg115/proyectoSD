const { Router } = require('express');
const router = Router();
const {getTeams, createTeam, deleteTeam, updateTeam, getTeam}=require('../controllers/teams.controller');
router.route('/')
    .get(getTeams)
    .post(createTeam)
router.route('/:id')
    .delete(deleteTeam)
    .get(getTeam)
    .put(updateTeam)
module.exports = router;