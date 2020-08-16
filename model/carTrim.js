const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const timestamps = require('mongoose-timestamp')

const carTrim = new Schema({
    model_id: { type: Number },
    model_make_id: { type: String},
    model_name: { type: String},
    model_trim: { type: String},
    model_year: { type: Number},
    model_body: { type: String},
    model_engine_position: { type: String},
    model_engine_cc: { type: Number},
    model_engine_cyl: { type: Number},
    model_engine_type: { type: String},
    model_engine_valves_per_cyl: { type: Number},
    model_engine_power_ps: { type: Number},
    model_engine_power_rpm: { type: Number},
    model_engine_torque_nm: { type: String},
    model_engine_torque_rpm: { type: String},
    model_engine_bore_mm: { type: Number},
    model_engine_stroke_mm: { type: Number},
    model_engine_compression: { type: String},
    model_engine_fuel: { type: String},
    model_top_speed_kph: { type: String},
    model_0_to_100_kph: { type: String},
    model_drive: { type: String},
    model_transmission_type: { type: String},
    model_seats: { type: Number},
    model_doors: { type: Number},
    model_weight_kg: { type: Number},
    model_length_mm: { type: Number},
    model_width_mm: { type: Number},
    model_height_mm: { type: Number},
    model_wheelbase_mm: { type: Number},
    model_lkm_hwy: { type: String},
    model_lkm_mixed: { type: String},
    model_lkm_city: { type: String},
    model_fuel_cap_l: { type: Number},
    model_sold_in_us: { type: Number},
    model_co2: { type: String},
    model_make_display: { type: String},
    make_display: { type: String},
    make_country: { type: String},
})
carTrim.plugin(timestamps)

module.exports = mongoose.model('cartrims', carTrim)