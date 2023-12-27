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


// Description of Mimosa diplotricha
const Mimosa_diplotricha = new Mimosa()
Mimosa_diplotricha.specificEpithet = 'diplotricha'

Mimosa_diplotricha.stems = new Stems()

Mimosa_diplotricha.stipule = new Stipule()
Mimosa_diplotricha.stipule.margin = new MarginStipule()
Mimosa_diplotricha.stipule.adaxial = new AdaxialStipule()
Mimosa_diplotricha.stipule.abaxial = new AbaxialStipule()

Mimosa_diplotricha.leaf = new Leaf()
Mimosa_diplotricha.leaf.petiole = new Petiole()
Mimosa_diplotricha.leaf.bipinnate = new Bipinnate()
Mimosa_diplotricha.leaf.bipinnate.rachis = new Rachis()
Mimosa_diplotricha.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_diplotricha.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_diplotricha.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(4, 8)
Mimosa_diplotricha.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMax(9)
Mimosa_diplotricha.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_diplotricha.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_diplotricha.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_diplotricha.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(14, 17)
Mimosa_diplotricha.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_diplotricha.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_diplotricha.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_diplotricha.inflorescence = new Inflorescence()
Mimosa_diplotricha.inflorescence.peduncle = new Peduncle()
Mimosa_diplotricha.inflorescence.capitate = new CapitateInflorescence()

Mimosa_diplotricha.flower = new Flower()
Mimosa_diplotricha.flower.bracteole = new Bracteole()
Mimosa_diplotricha.flower.merism = ['4-merous', '5-merous']
Mimosa_diplotricha.flower.calyx = new Calyx()
Mimosa_diplotricha.flower.calyx.shape = 'campanulate'
Mimosa_diplotricha.flower.corolla = new Corolla()
Mimosa_diplotricha.flower.corolla.shape = ['turbinate', 'vase-shaped']

Mimosa_diplotricha.androecium = new Androecium()
Mimosa_diplotricha.androecium.filaments = new Filaments()
Mimosa_diplotricha.androecium.filaments.colour = 'pinkish'

Mimosa_diplotricha.ginoecium = new Ginoecium()
Mimosa_diplotricha.ginoecium.ovary = new Ovary()

Mimosa_diplotricha.fruit = new Fruit()
Mimosa_diplotricha.fruit.stipe = new Stipe()
Mimosa_diplotricha.fruit.replum = new Replum()
Mimosa_diplotricha.fruit.epicarp = new Epicarp()

Mimosa_diplotricha.seed = new Seed()


// Description authorship
Mimosa_diplotricha.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_diplotricha.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa diplotricha
export { Mimosa_diplotricha }