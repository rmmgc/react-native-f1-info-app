const fs = require('fs');

let imagesImporter = 'const imagesImporter = [\n'
let walkPath = './assets/images'

let walk = function (dir, done) {
	fs.readdir(dir, function (error, list) {
		if (error) {
			return done(error);
		}

		let i = 0

		(function next () {
			let file = list[i++]

			if (!file) return done(null)
			
			file = dir + '/' + file
			fs.stat(file, function (error, stat) {

				if (stat && stat.isDirectory()) {
					walk(file, function (error) {
						next()
					})
				} 
				else {
					console.log(file)
					imagesImporter += `  require('.${file}'),\n`
					next()
				}
			})
		})()
	})
}

console.log('--------------------');
console.log('processing...');
console.log('--------------------');

walk(walkPath, function(error) {
	if (error) {
		throw error
	} 
	else {
		console.log('--------------------')
		imagesImporter += '\n] \n\n export {\n  imagesImporter\n}\n'
		fs.writeFileSync("./utils/importImages.js", imagesImporter)
		console.log('finished.')
		console.log('--------------------');
	}
})
