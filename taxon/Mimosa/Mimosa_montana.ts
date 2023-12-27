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


// Description of Mimosa montana
const Mimosa_montana = new Mimosa()
Mimosa_montana.specificEpithet = 'montana'

Mimosa_montana.stems = new Stems()

Mimosa_montana.stipule = new Stipule()
Mimosa_montana.stipule.margin = new MarginStipule()
Mimosa_montana.stipule.adaxial = new AdaxialStipule()
Mimosa_montana.stipule.abaxial = new AbaxialStipule()

Mimosa_montana.leaf = new Leaf()
Mimosa_montana.leaf.petiole = new Petiole()
Mimosa_montana.leaf.bipinnate = new Bipinnate()
Mimosa_montana.leaf.bipinnate.rachis = new Rachis()
Mimosa_montana.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_montana.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_montana.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(2, 3)
Mimosa_montana.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMax(4)
Mimosa_montana.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_montana.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_montana.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_montana.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_montana.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_montana.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_montana.inflorescence = new Inflorescence()
Mimosa_montana.inflorescence.peduncle = new Peduncle()
Mimosa_montana.inflorescence.capitate = new CapitateInflorescence()

Mimosa_montana.flower = new Flower()
Mimosa_montana.flower.bracteole = new Bracteole()
Mimosa_montana.flower.merism = '5-merous'
Mimosa_montana.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_montana.flower.calyx = new Calyx()
Mimosa_montana.flower.calyx.shape = 'campanulate'
Mimosa_montana.flower.corolla = new Corolla()
Mimosa_montana.flower.corolla.shape = 'vase-shaped'

Mimosa_montana.androecium = new Androecium()
Mimosa_montana.androecium.filaments = new Filaments()
Mimosa_montana.androecium.filaments.colour = ['whitenish', 'creamish']

Mimosa_montana.ginoecium = new Ginoecium()
Mimosa_montana.ginoecium.ovary = new Ovary()

Mimosa_montana.fruit = new Fruit()
Mimosa_montana.fruit.stipe = new Stipe()
Mimosa_montana.fruit.replum = new Replum()
Mimosa_montana.fruit.epicarp = new Epicarp()

Mimosa_montana.seed = new Seed()


// Description authorship
Mimosa_montana.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_montana.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa montana
export { Mimosa_montana }