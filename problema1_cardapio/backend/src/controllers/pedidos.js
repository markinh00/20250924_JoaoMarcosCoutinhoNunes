export function createOrderhandler(req, res){
    const {nomeCliente, observacoes, produtos} = req.body;

    if (!nomeCliente) return res.status(400).json({error: "Parâmetro 'nomeCliente' é obrigatório"});
    if (!observacoes) return res.status(400).json({error: "Parâmetro 'observacoes' é obrigatório"});
    if (!produtos) return res.status(400).json({error: "Parâmetro 'produtos' é obrigatório"});
}