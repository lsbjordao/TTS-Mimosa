// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { 
    Stems, 
    Trichomes,
    Prickles,
    Stipule, 
    Leaf, 
    Inflorescence, 
    Flower,
    Androecium,
    Ginoecium,
    Fruit
} from '../../characters/v1'
import { Bipinnate, Petiole } from '../../characters/v1/Leaf'
import { Rachis, Pinnae } from '../../characters/v1/Leaf/Bipinnate'
import { Spicule } from '../../characters/v1/Leaf/Bipinnate/Rachis/Spicule'
import { Rachilla, Leaflet, Paraphillidia } from '../../characters/v1/Leaf/Bipinnate/Pinnae'
import {
    AdaxialLeaflet, 
    AbaxialLeaflet, 
    MarginLeaflet
} from '../../characters/v1/Leaf/Bipinnate/Pinnae/Leaflet'
import { AdaxialStipule, AbaxialStipule, MarginStipule } from '../../characters/v1/Stipule'
import { Peduncle, CapitateInflorescence } from '../../characters/v1/Inflorescence'
import { Calyx, Corolla, Bracteole } from '../../characters/v1/Flower'
import { Stipe, Epicarp, Replum } from '../../characters/v1/Fruit'
import { Filaments } from '../../characters/v1/Androecium'
import { Ovary } from '../../characters/v1/Ginoecium'
import { Seed } from '../../characters/v1/Seed'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'


// Description of Mimosa corynadenia
const Mimosa_corynadenia = new Mimosa()
Mimosa_corynadenia.specificEpithet = 'corynadenia'

Mimosa_corynadenia.stems = new Stems()

Mimosa_corynadenia.stipule = new Stipule()
Mimosa_corynadenia.stipule.margin = new MarginStipule()
Mimosa_corynadenia.stipule.adaxial = new AdaxialStipule()
Mimosa_corynadenia.stipule.abaxial = new AbaxialStipule()

Mimosa_corynadenia.leaf = new Leaf()
Mimosa_corynadenia.leaf.petiole = new Petiole()
Mimosa_corynadenia.leaf.bipinnate = new Bipinnate()
Mimosa_corynadenia.leaf.bipinnate.rachis = new Rachis()
Mimosa_corynadenia.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_corynadenia.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_corynadenia.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(3, 5)
Mimosa_corynadenia.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_corynadenia.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_corynadenia.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_corynadenia.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_corynadenia.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_corynadenia.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_corynadenia.inflorescence = new Inflorescence()
Mimosa_corynadenia.inflorescence.peduncle = new Peduncle()
Mimosa_corynadenia.inflorescence.capitate = new CapitateInflorescence()

Mimosa_corynadenia.flower = new Flower()
Mimosa_corynadenia.flower.bracteole = new Bracteole()
Mimosa_corynadenia.flower.merism = ['4-merous', '5-merous']
Mimosa_corynadenia.flower.calyx = new Calyx()
Mimosa_corynadenia.flower.corolla = new Corolla()
Mimosa_corynadenia.flower.corolla.shape = 'turbinate'

Mimosa_corynadenia.androecium = new Androecium()
Mimosa_corynadenia.androecium.filaments = new Filaments()
Mimosa_corynadenia.androecium.filaments.colour = 'whitenish'

Mimosa_corynadenia.ginoecium = new Ginoecium()
Mimosa_corynadenia.ginoecium.ovary = new Ovary()

Mimosa_corynadenia.fruit = new Fruit()
Mimosa_corynadenia.fruit.stipe = new Stipe()
Mimosa_corynadenia.fruit.replum = new Replum()
Mimosa_corynadenia.fruit.epicarp = new Epicarp()

Mimosa_corynadenia.seed = new Seed()


// Description authorship
Mimosa_corynadenia.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_corynadenia.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa corynadenia
export { Mimosa_corynadenia }