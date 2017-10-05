const router = require('express').Router();
const deliveryModel = require('../models/deliveryModel');
const configDB = require('../config/database');

router.post ('/setDeliveries', (req, res, next)=>{
    let newDelivery = new deliveryModel ({
        nome: req.body.nome,
        peso: req.body.peso,
        endereço: [{
            logradouro: req.body.endereço[0].logradouro,
            numero: req.body.endereço[0].numero,
            bairro: req.body.endereço[0].bairro,
            complemento: req.body.endereço[0].complemento,
            cidade: req.body.endereço[0].cidade,
            estado: req.body.endereço[0].estado,
            pais: req.body.endereço[0].pais,
            geolocalização: [{
                lat: req.body.endereço[0].geolocalização[0].lat,
                long: req.body.endereço[0].geolocalização[0].long
            }]
        }]
    });

    //Conferir se o mesmo endereço ja foi cadastrado
    deliveryModel.getDeliveryByAddress(newDelivery.endereço[0].logradouro,newDelivery.endereço[0].numero, newDelivery.endereço[0].cidade , (err, delivery)=>{
        //caso a rua numero e ciadde sejam o mesmo retornar que o endereço já está cadastrado
        if (err) 
            throw err;
        
        if (delivery){
            if (newDelivery.endereço[0].logradouro == delivery.endereço[0].logradouro && 
                newDelivery.endereço[0].numero == delivery.endereço[0].numero &&
                newDelivery.endereço[0].cidade == delivery.endereço[0].cidade) {
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

//Rota para deletar TODOS os registros da coleção
router.delete ('/deleteDeliveries', (req, res, next)=>{
    deliveryModel.remove({}, (err, data)=>{
        if (err)
            return res.json({success: false, msg: 'Falha ao deletar. Por favor tente novamente.'})            
        else 
            return res.json({success: true, msg: 'Todos endereços cadastrados foram deletados com sucesso'})             
        
    })
});

module.exports = router;