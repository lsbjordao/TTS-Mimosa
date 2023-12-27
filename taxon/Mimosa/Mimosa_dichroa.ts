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
import { Peduncle, Spicate } from '../../characters/v1/Inflorescence'
import { Calyx, Corolla, Bracteole } from '../../characters/v1/Flower'
import { Stipe, Epicarp, Replum } from '../../characters/v1/Fruit'
import { Filaments } from '../../characters/v1/Androecium'
import { Ovary } from '../../characters/v1/Ginoecium'
import { Seed } from '../../characters/v1/Seed'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'


// Description of Mimosa dichroa
const Mimosa_dichroa = new Mimosa()
Mimosa_dichroa.specificEpithet = 'dichroa'

Mimosa_dichroa.stems = new Stems()

Mimosa_dichroa.stipule = new Stipule()
Mimosa_dichroa.stipule.margin = new MarginStipule()
Mimosa_dichroa.stipule.adaxial = new AdaxialStipule()
Mimosa_dichroa.stipule.abaxial = new AbaxialStipule()

Mimosa_dichroa.leaf = new Leaf()
Mimosa_dichroa.leaf.petiole = new Petiole()
Mimosa_dichroa.leaf.bipinnate = new Bipinnate()
Mimosa_dichroa.leaf.bipinnate.rachis = new Rachis()
Mimosa_dichroa.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_dichroa.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_dichroa.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(5, 10)
Mimosa_dichroa.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_dichroa.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_dichroa.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_dichroa.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_dichroa.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_dichroa.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_dichroa.inflorescence = new Inflorescence()
Mimosa_dichroa.inflorescence.peduncle = new Peduncle()
Mimosa_dichroa.inflorescence.spicate = new Spicate()

Mimosa_dichroa.flower = new Flower()
Mimosa_dichroa.flower.bracteole = new Bracteole()
Mimosa_dichroa.flower.merism = '4-merous'
Mimosa_dichroa.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_dichroa.flower.calyx = new Calyx()
Mimosa_dichroa.flower.calyx.shape = 'campanulate'
Mimosa_dichroa.flower.corolla = new Corolla()
Mimosa_dichroa.flower.corolla.shape = 'turbinate'

Mimosa_dichroa.androecium = new Androecium()
Mimosa_dichroa.androecium.filaments = new Filaments()
Mimosa_dichroa.androecium.filaments.colour = ['pinkish', 'whitenish']

Mimosa_dichroa.ginoecium = new Ginoecium()
Mimosa_dichroa.ginoecium.ovary = new Ovary()

Mimosa_dichroa.fruit = new Fruit()
Mimosa_dichroa.fruit.stipe = new Stipe()
Mimosa_dichroa.fruit.replum = new Replum()
Mimosa_dichroa.fruit.epicarp = new Epicarp()

Mimosa_dichroa.seed = new Seed()


// Description authorship
Mimosa_dichroa.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_dichroa.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa dichroa
export { Mimosa_dichroa }