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


// Description of Mimosa spirocarpa
const Mimosa_spirocarpa = new Mimosa()
Mimosa_spirocarpa.specificEpithet = 'spirocarpa'

Mimosa_spirocarpa.stems = new Stems()

Mimosa_spirocarpa.stipule = new Stipule()
Mimosa_spirocarpa.stipule.margin = new MarginStipule()
Mimosa_spirocarpa.stipule.adaxial = new AdaxialStipule()
Mimosa_spirocarpa.stipule.abaxial = new AbaxialStipule()

Mimosa_spirocarpa.leaf = new Leaf()
Mimosa_spirocarpa.leaf.petiole = new Petiole()
Mimosa_spirocarpa.leaf.bipinnate = new Bipinnate()
Mimosa_spirocarpa.leaf.bipinnate.rachis = new Rachis()
Mimosa_spirocarpa.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_spirocarpa.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_spirocarpa.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_spirocarpa.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_spirocarpa.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_spirocarpa.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(25, 40)
Mimosa_spirocarpa.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_spirocarpa.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_spirocarpa.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_spirocarpa.inflorescence = new Inflorescence()
Mimosa_spirocarpa.inflorescence.peduncle = new Peduncle()
Mimosa_spirocarpa.inflorescence.spicate = new Spicate()

Mimosa_spirocarpa.flower = new Flower()
Mimosa_spirocarpa.flower.bracteole = new Bracteole()
Mimosa_spirocarpa.flower.merism = '5-merous'
Mimosa_spirocarpa.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_spirocarpa.flower.calyx = new Calyx()
Mimosa_spirocarpa.flower.calyx.shape = 'campanulate'
Mimosa_spirocarpa.flower.corolla = new Corolla()
Mimosa_spirocarpa.flower.corolla.shape = 'turbinate'

Mimosa_spirocarpa.androecium = new Androecium()
Mimosa_spirocarpa.androecium.filaments = new Filaments()
Mimosa_spirocarpa.androecium.filaments.colour = ['pinkish', 'whitenish']

Mimosa_spirocarpa.ginoecium = new Ginoecium()
Mimosa_spirocarpa.ginoecium.ovary = new Ovary()

Mimosa_spirocarpa.fruit = new Fruit()
Mimosa_spirocarpa.fruit.stipe = new Stipe()
Mimosa_spirocarpa.fruit.replum = new Replum()
Mimosa_spirocarpa.fruit.epicarp = new Epicarp()

Mimosa_spirocarpa.seed = new Seed()


// Description authorship
Mimosa_spirocarpa.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_spirocarpa.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa spirocarpa
export { Mimosa_spirocarpa }