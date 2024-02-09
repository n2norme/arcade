const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // Mode de développement par défaut pour un meilleur débogage
    mode: 'development',

    // Points d'entrée pour chaque page
    entry: {
        index: './src/index/index.js', // Point d'entrée pour la page index
        select: './src/select/index.js', // Point d'entrée pour la page select
        about: './src/about/index.js', // Point d'entrée pour la page about
        portfolio: './src/portfolio/index.js', // Point d'entrée pour la page portfolio
        gallery: './src/gallery/index.js', // Point d'entrée pour la page gallery
        histoire: './src/histoire/index.js', // Point d'entrée pour la page histoire
        blog: './src/blog/index.js', // Point d'entrée pour la page blog
        contact: './src/contact/index.js', // Point d'entrée pour la page contact
        jeu: './src/jeu/index.js', // Point d'entrée pour la page jeu
        servcies: './src/services/index.js', // Point d'entrée pour la page services

        // ... autres pages
    },

    // Sortie des bundles
    output: {
        filename: '[name].bundle.js', // Nom de fichier basé sur le nom du point d'entrée
        path: path.resolve(__dirname, 'dist'), // Dossier de sortie
        publicPath: "/", // Chemin public pour les fichiers de sortie
    },

    // Configuration des plugins
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html', // Nom du fichier final dans dist/
            template: './src/index/index.html', // Template HTML source pour la page1
            chunks: ['index'], // Inclure uniquement le bundle de la page index
        }),
        new HtmlWebpackPlugin({
            filename: 'select.html', // Nom du fichier final pour la select
            template: './src/select/select.html', // Template HTML source pour la select
            chunks: ['select'], // Inclure uniquement le bundle de la page select
        }),
        // ... configuration pour d'autres pages
        new HtmlWebpackPlugin({
            filename: 'about.html', // Nom du fichier final pour la page about
            template: './src/about/about.html', // Template HTML source pour la page about
            chunks: ['about'], // Inclure uniquement le bundle de la page about
        }),
        new HtmlWebpackPlugin({
            filename: 'portfolio.html', // Nom du fichier final pour la page portfolio
            template: './src/portfolio/portfolio.html', // Template HTML source pour la page portfolio
            chunks: ['portfolio'], // Inclure uniquement le bundle de la page portfolio
        }),
        new HtmlWebpackPlugin({
            filename: 'gallery.html', // Nom du fichier final pour la page gallery
            template: './src/gallery/gallery.html', // Template HTML source pour la page gallery
            chunks: ['gallery'], // Inclure uniquement le bundle de la page gallery
        }),
        new HtmlWebpackPlugin({
            filename: 'histoire.html', // Nom du fichier final pour la page histoire
            template: './src/histoire/histoire.html', // Template HTML source pour la page histoire
            chunks: ['histoire'], // Inclure uniquement le bundle de la page histoire
        })
    ,
    new HtmlWebpackPlugin({
        filename: 'blog.html', // Nom du fichier final pour la page blog
        template: './src/blog/blog.html', // Template HTML source pour la page blog
        chunks: ['blog'], // Inclure uniquement le bundle de la page blog
    }),

    new HtmlWebpackPlugin({
        filename: 'contact.html', // Nom du fichier final pour la page contact
        template: './src/contact/contact.html', // Template HTML source pour la page contact
        chunks: ['contact'], // Inclure uniquement le bundle de la page contact
    }),
    new HtmlWebpackPlugin({
        filename: 'jeu.html', // Nom du fichier final pour la page jeu
        template: './src/jeu/jeu.html', // Template HTML source pour la page jeu
        chunks: ['jeu'], // Inclure uniquement le bundle de la page jeu
    }),
    new HtmlWebpackPlugin({
        filename: 'services.html', // Nom du fichier final pour la page services
        template: './src/services/services.html', // Template HTML source pour la page services
        chunks: ['services'], // Inclure uniquement le bundle de la page services
    }),
    ],


    // Configuration des loaders
    module: {
        rules: [
            {
                test: /\.css$/, // Pour les fichiers .css
                use: [
                    'style-loader', // Injecte les styles dans le DOM
                    'css-loader', // Charge et résout les imports CSS
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,  // Inclure gif dans la regex
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images',  // Dossier de sortie pour les images
                            name: '[name].[ext]',  // Conserver le nom et l'extension originaux
                            publicPath: '/',  // Chemin public pour les images
                        },
                    },
                ],
            },
            {
                test: /\.(mp3|wav)$/, // Regex pour les fichiers .mp3 et .wav
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'sounds/', // Dossier de sortie pour les sons
                            publicPath: '/sounds', // Chemin public pour les sons
                        },
                    },

        ],
    },
            {
                test: /\.(mp4)$/, // Regex pour les fichiers vidéo et audio
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'videos/', // Dossier de sortie
                            publicPath: '/video', // Chemin public pour
                        },
                    },

                ],
            },
],
    },
    // Configuration pour le serveur de développement
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 3000, // Port pour le serveur de développement
    },
};
