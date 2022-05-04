const express = require('express');
const router = express.Router();

router
	.route('/toys')
	.get((req, res)=>{
	res.json({request: 'GET',
		  response: 'JSON'});
})
	.post((req, res)=>{
        res.json({request: 'POST',
                  response: 'JSON'});
});

router
	.route('/toys/:id')
	.put((req, res)=>{
        res.json({request: 'PUT',
                  response: 'JSON',
				   toy_id: req.params.id});
})
	.delete((req, res)=>{
        res.json({request: 'DELETE',
                  response: 'JSON',
				  toy_id: req.params.id});
});

module.exports = router;
