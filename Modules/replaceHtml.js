module.exports = function replaceHtml(template, product) {
    let output = template.replace("{{%MODELIMAGE%}}", product.productImage)
    output = output.replace('{{%PHONENAME%}}', product.name)
    output = output.replace('{{%MODELNAME%}}', product.modeName)
    output = output.replace('{{%MODELNO%}}', product.modelNumber)
    output = output.replace('{{%MODELSIZE%}}', product.size)
    output = output.replace('{{%CAMERA%}}', product.camera)
    output = output.replace('{{%PRICE%}}', product.price)
    output = output.replace('{{%COLOR%}}', product.color)
    output = output.replace('{{%ID%}}', product.id)
    output = output.replace('{{%ROM%}}', product.ROM)
    output = output.replace('{{%DESC%}}', product.Description)

    return output
}