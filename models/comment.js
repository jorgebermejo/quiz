// Definicion del modelo de Quiz con validación

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
  	'Comment',
    { texto: {
        type: DataTypes.STRING,
        validate: { notEmpty: {msg: "-> Falta Comentario"}}
      },
       publicado: {
      	type: DataTypes.BOOLEAN,
      	defaultValue: false
       }		       
    },
    {
					classMethods: {	
						count: function () {
							return this.aggregate('QuizId', 'count', { distinct: false })
						},
						countNopublicado: function () {
		    				return this.count({ where: { publicado: false } });
		    			},
						countPreguntasComentadas: function () {
							return this.aggregate('QuizId', 'count', { distinct: true })
						}	
					}
				});
};

