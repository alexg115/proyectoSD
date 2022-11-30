const teamsCtrl = {};

const Team = require('../models/Team');

teamsCtrl.getTeams = async (req,res) =>{
    const teams = await Team.find();
    res.json(teams);
}

teamsCtrl.createTeam = (req, res) => {
    const { name, user, team } = req.body;
    const newTeam = new Team({
        name: name,
        user: user,
        team: team
    });
    console.log(newTeam);
    newTeam.save();
    res.json({message: 'Team Saved'});
};

teamsCtrl.getTeam = async (req, res) => {
    const team = await Team.findById(req.params.id);
    console.log(team);
    res.json(team);
};

teamsCtrl.updateTeam = async (req, res) => {
    const { name, user, team } = req.body;
    await Team.findOneAndUpdate({_id: req.params.id}, {
        name,
        user,
        team
    });
    console.log(req.params.id, req.body);
    res.json({message: 'Team Updated'});
};

teamsCtrl.deleteTeam = async (req, res) => {
    await Team.findByIdAndDelete(req.params.id);
    res.json({message: 'Team Deleted'})
};

module.exports = teamsCtrl;