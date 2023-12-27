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


// Description of Mimosa neptunioides
const Mimosa_neptunioides = new Mimosa()
Mimosa_neptunioides.specificEpithet = 'neptunioides'

Mimosa_neptunioides.stems = new Stems()

Mimosa_neptunioides.stipule = new Stipule()
Mimosa_neptunioides.stipule.margin = new MarginStipule()
Mimosa_neptunioides.stipule.adaxial = new AdaxialStipule()
Mimosa_neptunioides.stipule.abaxial = new AbaxialStipule()

Mimosa_neptunioides.leaf = new Leaf()
Mimosa_neptunioides.leaf.petiole = new Petiole()
Mimosa_neptunioides.leaf.bipinnate = new Bipinnate()
Mimosa_neptunioides.leaf.bipinnate.rachis = new Rachis()
Mimosa_neptunioides.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_neptunioides.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_neptunioides.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(2, 4)
Mimosa_neptunioides.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_neptunioides.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_neptunioides.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_neptunioides.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_neptunioides.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_neptunioides.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_neptunioides.inflorescence = new Inflorescence()
Mimosa_neptunioides.inflorescence.peduncle = new Peduncle()
Mimosa_neptunioides.inflorescence.capitate = new CapitateInflorescence()

Mimosa_neptunioides.flower = new Flower()
Mimosa_neptunioides.flower.bracteole = new Bracteole()
Mimosa_neptunioides.flower.merism = '4-merous'
Mimosa_neptunioides.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_neptunioides.flower.calyx = new Calyx()
Mimosa_neptunioides.flower.calyx.shape = 'campanulate'
Mimosa_neptunioides.flower.corolla = new Corolla()
Mimosa_neptunioides.flower.corolla.shape = 'turbinate'

Mimosa_neptunioides.androecium = new Androecium()
Mimosa_neptunioides.androecium.filaments = new Filaments()
Mimosa_neptunioides.androecium.filaments.colour = 'pinkish'

Mimosa_neptunioides.ginoecium = new Ginoecium()
Mimosa_neptunioides.ginoecium.ovary = new Ovary()

Mimosa_neptunioides.fruit = new Fruit()
Mimosa_neptunioides.fruit.stipe = new Stipe()
Mimosa_neptunioides.fruit.replum = new Replum()
Mimosa_neptunioides.fruit.epicarp = new Epicarp()

Mimosa_neptunioides.seed = new Seed()


// Description authorship
Mimosa_neptunioides.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_neptunioides.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa neptunioides
export { Mimosa_neptunioides }