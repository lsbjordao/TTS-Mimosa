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


// Description of Mimosa laniceps
const Mimosa_laniceps = new Mimosa()
Mimosa_laniceps.specificEpithet = 'laniceps'

Mimosa_laniceps.stems = new Stems()

Mimosa_laniceps.stipule = new Stipule()
Mimosa_laniceps.stipule.margin = new MarginStipule()
Mimosa_laniceps.stipule.adaxial = new AdaxialStipule()
Mimosa_laniceps.stipule.abaxial = new AbaxialStipule()

Mimosa_laniceps.leaf = new Leaf()
Mimosa_laniceps.leaf.petiole = new Petiole()
Mimosa_laniceps.leaf.bipinnate = new Bipinnate()
Mimosa_laniceps.leaf.bipinnate.rachis = new Rachis()
Mimosa_laniceps.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_laniceps.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_laniceps.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(14, 25)
Mimosa_laniceps.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMax(30)
Mimosa_laniceps.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_laniceps.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_laniceps.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_laniceps.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(4, 6)
Mimosa_laniceps.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_laniceps.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_laniceps.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_laniceps.inflorescence = new Inflorescence()
Mimosa_laniceps.inflorescence.peduncle = new Peduncle()
Mimosa_laniceps.inflorescence.capitate = new CapitateInflorescence()

Mimosa_laniceps.flower = new Flower()
Mimosa_laniceps.flower.bracteole = new Bracteole()
Mimosa_laniceps.flower.merism = '4-merous'
Mimosa_laniceps.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_laniceps.flower.calyx = new Calyx()
Mimosa_laniceps.flower.calyx.shape = 'campanulate'
Mimosa_laniceps.flower.corolla = new Corolla()
Mimosa_laniceps.flower.corolla.shape = 'funnelform'

Mimosa_laniceps.androecium = new Androecium()
Mimosa_laniceps.androecium.filaments = new Filaments()
Mimosa_laniceps.androecium.filaments.colour = ['pinkish', 'whitenish']

Mimosa_laniceps.ginoecium = new Ginoecium()
Mimosa_laniceps.ginoecium.ovary = new Ovary()

Mimosa_laniceps.fruit = new Fruit()
Mimosa_laniceps.fruit.stipe = new Stipe()
Mimosa_laniceps.fruit.replum = new Replum()
Mimosa_laniceps.fruit.epicarp = new Epicarp()

Mimosa_laniceps.seed = new Seed()


// Description authorship
Mimosa_laniceps.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_laniceps.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa laniceps
export { Mimosa_laniceps }