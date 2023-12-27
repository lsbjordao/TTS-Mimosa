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


// Description of Mimosa verecunda
const Mimosa_verecunda = new Mimosa()
Mimosa_verecunda.specificEpithet = 'verecunda'

Mimosa_verecunda.stems = new Stems()

Mimosa_verecunda.stipule = new Stipule()
Mimosa_verecunda.stipule.margin = new MarginStipule()
Mimosa_verecunda.stipule.adaxial = new AdaxialStipule()
Mimosa_verecunda.stipule.abaxial = new AbaxialStipule()

Mimosa_verecunda.leaf = new Leaf()
Mimosa_verecunda.leaf.petiole = new Petiole()
Mimosa_verecunda.leaf.bipinnate = new Bipinnate()
Mimosa_verecunda.leaf.bipinnate.rachis = new Rachis()
Mimosa_verecunda.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_verecunda.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_verecunda.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(2, 11)
Mimosa_verecunda.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_verecunda.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_verecunda.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_verecunda.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(9, 16)
Mimosa_verecunda.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_verecunda.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_verecunda.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_verecunda.inflorescence = new Inflorescence()
Mimosa_verecunda.inflorescence.peduncle = new Peduncle()
Mimosa_verecunda.inflorescence.capitate = new CapitateInflorescence()

Mimosa_verecunda.flower = new Flower()
Mimosa_verecunda.flower.bracteole = new Bracteole()
Mimosa_verecunda.flower.merism = '4-merous'
Mimosa_verecunda.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_verecunda.flower.calyx = new Calyx()
Mimosa_verecunda.flower.calyx.shape = 'paleaceous-pappiform'
Mimosa_verecunda.flower.corolla = new Corolla()
Mimosa_verecunda.flower.corolla.shape = 'subcylindric'

Mimosa_verecunda.androecium = new Androecium()
Mimosa_verecunda.androecium.filaments = new Filaments()
Mimosa_verecunda.androecium.filaments.colour = ['lilac', 'pinkish']

Mimosa_verecunda.ginoecium = new Ginoecium()
Mimosa_verecunda.ginoecium.ovary = new Ovary()

Mimosa_verecunda.fruit = new Fruit()
Mimosa_verecunda.fruit.stipe = new Stipe()
Mimosa_verecunda.fruit.replum = new Replum()
Mimosa_verecunda.fruit.epicarp = new Epicarp()

Mimosa_verecunda.seed = new Seed()


// Description authorship
Mimosa_verecunda.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_verecunda.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa verecunda
export { Mimosa_verecunda }