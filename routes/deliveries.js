const router = require('express').Router();
const deliveryModel = require('../models/deliveryModel');
const configDB = require('../config/database');

router.post ('/setDeliveries', (req, res, next)=>{
    let newDelivery = new deliveryModel ({
        nome: req.body.nome,
        peso: req.body.peso,
        endereco: [{
            logradouro: req.body.endereco[0].logradouro,
            numero: req.body.endereco[0].numero,
            bairro: req.body.endereco[0].bairro,
            complemento: req.body.endereco[0].complemento,
            cidade: req.body.endereco[0].cidade,
            estado: req.body.endereco[0].estado,
            pais: req.body.endereco[0].pais,
            geolocalizacão: [{
                lat: req.body.endereco[0].geolocalizacão[0].lat,
                long: req.body.endereco[0].geolocalizacão[0].long
            }]
        }]
    });

    //Conferir se o mesmo endereco ja foi cadastrado
    deliveryModel.getDeliveryByAddress(newDelivery.endereco[0].logradouro,newDelivery.endereco[0].numero, newDelivery.endereco[0].cidade , (err, delivery)=>{
        //caso a rua numero e ciadde sejam o mesmo retornar que o endereco já está cadastrado
        if (err) 
            throw err;
        
        if (delivery){
            if (newDelivery.endereco[0].logradouro == delivery.endereco[0].logradouro && 
                newDelivery.endereco[0].numero == delivery.endereco[0].numero &&
                newDelivery.endereco[0].cidade == delivery.endereco[0].cidade) {
                    return res.json({success: false, msg: 'Endereço já cadastrado. Aguarde a retirada.'})            
            }            
        } else {
            //Salvar novo delivery na base de dados
            deliveryModel.saveDelivery(newDelivery, (err, delivery)=>{
                if (err) {
                    console.log (err);            
                    return res.json({success: false, msg: 'Falha ao cadastrar delivery. Por favor tente novamente.'})            
                }
                else if (delivery)
                    return res.json({success: true, msg: 'Delivery cadastrado com sucesso'})        
            })
        }
    });
});

router.get ('/getDeliveries', (req, res, next)=>{
    deliveryModel.getAllDeliveries((err, deliveries)=>{
        if (err) throw err;
        
        if (deliveries){
            const allDeliverys ={}
            for (var i=0; i< deliveries.length; i++){
                allDeliverys[i] = deliveries[i];
            }
            return res.json(allDeliverys);
        }
    })
});

//Rota para deletar TODOS os registros da colecão
router.delete ('/deleteDeliveries', (req, res, next)=>{
    deliveryModel.remove({}, (err, data)=>{
        if (err)
            return res.json({success: false, msg: 'Falha ao deletar. Por favor tente novamente.'})            
        else 
            return res.json({success: true, msg: 'Todos endereços cadastrados foram deletados com sucesso'})             
        
    })
});


router.delete ('/deleteOneDelivery', (req, res, next)=>{
    
    const logradouro = req.body.logradouro;
    const numero = req.body.numero;
    const cidade = req.body.cidade;

    deliveryModel.getDeliveryByAddress(logradouro, numero, cidade, (err, delivery)=>{
        if (err) throw err;

        if (delivery){
            const query = {_id: delivery._id}
            deliveryModel.remove(query,()=>{
                if (err)
                return res.json({success: false, msg: 'Falha ao deletar. Por favor tente novamente.'})            
            else 
                return res.json({success: true, msg: 'Endereço deletado com sucesso'})
            })
        }
    });
});


module.exports = router;