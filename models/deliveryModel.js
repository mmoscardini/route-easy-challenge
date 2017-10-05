const mongoose = require('mongoose');

const DeliverySchema = mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    peso: {
        type: Number,
        required: true
    },
    endereço: [{
        logradouro: {type: String,required: true},
        numero: {type: Number,required: true},
        bairro: {type: String,required: true},
        complemento: {type: String},
        cidade: {type: String,required: true},
        estado: {type: String,required: true},
        pais: {type: String,required: true},
        geolocalização: [{
            lat: {type: Number,required: true},
            long: {type: Number,required: true}
        }]
    }]
})

const deliverySchema = module.exports = mongoose.model('deliveries', DeliverySchema);

module.exports.getDeliveryById = (id, callback)=>{
    deliverySchema.findById(id, callback);
}

module.exports.getDeliveryByAddress = (logradouro,numero,cidade, callback)=>{
    deliverySchema.findOne({"endereço.logradouro": logradouro, "endereço.numero": numero, "endereço.cidade":cidade}, callback);
}

module.exports.saveDelivery = (data, callback)=>{
    data.save(callback);
}

module.exports.getAllDeliveries = (callback)=>{
    deliverySchema.find({}, callback)
}