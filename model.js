const mongoose = require('mongoose');


const otPaiCorSchema = mongoose.Schema(
    {
      regional_origem: { type: String, index: true },
      regional: String,
      loja_origem: { type: Number, index: true },
      climate_cluster: { type: String, index: true },
      perfil_loja: { type: String, index: true },
      negocio: { type: String, index: true },
      divisao: { type: String, index: true },
      grupo_num: { type: Number, index: true },
      grupo: String,
      classe: { type: String, index: true },
      subclass_num: { type: Number, index: true },
      subclasse: String,
      sazonalidade_subclasse: { type: String, index: true },
      item_pai_nome: String,
      item_pai: { type: Number, index: true },
      cor_num: { type: String, index: true },
      cor_tam: String,
      paicor: String,
      itens: [Number],
      gross_margin_value_financial: Number,
      financial_sales: Number,
      margem_de_lucro: Number,
      vda_2w_lj_modelo: Number,
      vda_2w_mod_ecom: Number,
      eoh_loja_nec: Number,
      eoh_loja_modelo: Number,
      st_modelo: Number,
      dif_equil: Number,
      eoh_rj: Number,
      in_transit_rj: Number,
      alloc_rj: Number,
      qtd_interestadual: Number,
      st_ecommerce: Number,
      dif_equil_ecom: Number,
      eoh_it_cd: Number,
      sugestao: Number,
      status_vitrine: String,
      piramide_mercadologica: { type: String, index: true },
      sazonalidade: { type: String, index: true },
      itens_fundamentais: { type: String, index: true },
      digital: { type: String, index: true },
      produtos: { type: String, index: true },
      flag_price_type: String,
      faixa_de_preco: String,
      idade_w_agrupado_bucket: { type: String, index: true },
      idade_w_bucket: { type: Number, index: true },
      maximo_transferencia: Number,
      eoh_apresentacao: Number,
      max_retirada_apresentacao: Number,
      max_retirada: Number,
      grade: Number,
      priorizar: String,
      data_inicio_app: Date,
      data_final_app_prazo: Date,
      semana_comercial: Number,
      numero_ot: Number,
      tipo_ot: String,
      forma_ot: String,
      loja_destino: Number,
      regional_destino: String,
      score_priorizacao: Number,
      score_smart: Number,
      id_loja_origem_pai_cor: { type: String, index: true },
      status: { type: Boolean, default: true, index: true },
      statusCSV: { type: Boolean, default: false, index: true },
    },
    {
      toObject: { virtuals: true },
      toJSON: { virtuals: true },
      versionKey: false,
      collection: 'ot_pai_cor',
      id: false,
      _id: false,
    },
);

exports.model = mongoose.model('ot_pai_cor', otPaiCorSchema);
  