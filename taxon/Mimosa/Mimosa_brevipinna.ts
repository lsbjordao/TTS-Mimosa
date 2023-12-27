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


// Description of Mimosa brevipinna
const Mimosa_brevipinna = new Mimosa()
Mimosa_brevipinna.specificEpithet = 'brevipinna'

Mimosa_brevipinna.stems = new Stems()

Mimosa_brevipinna.stipule = new Stipule()
Mimosa_brevipinna.stipule.margin = new MarginStipule()
Mimosa_brevipinna.stipule.adaxial = new AdaxialStipule()
Mimosa_brevipinna.stipule.abaxial = new AbaxialStipule()

Mimosa_brevipinna.leaf = new Leaf()
Mimosa_brevipinna.leaf.petiole = new Petiole()
Mimosa_brevipinna.leaf.bipinnate = new Bipinnate()
Mimosa_brevipinna.leaf.bipinnate.rachis = new Rachis()
Mimosa_brevipinna.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_brevipinna.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_brevipinna.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(5, 9)
Mimosa_brevipinna.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_brevipinna.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_brevipinna.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_brevipinna.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(7, 56)
Mimosa_brevipinna.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_brevipinna.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_brevipinna.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_brevipinna.inflorescence = new Inflorescence()
Mimosa_brevipinna.inflorescence.peduncle = new Peduncle()
Mimosa_brevipinna.inflorescence.capitate = new CapitateInflorescence()

Mimosa_brevipinna.flower = new Flower()
Mimosa_brevipinna.flower.bracteole = new Bracteole()
Mimosa_brevipinna.flower.merism = '3-merous'
Mimosa_brevipinna.flower.calyx = new Calyx()
Mimosa_brevipinna.flower.calyx.shape = 'campanulate'
Mimosa_brevipinna.flower.corolla = new Corolla()

Mimosa_brevipinna.androecium = new Androecium()
Mimosa_brevipinna.androecium.filaments = new Filaments()
Mimosa_brevipinna.androecium.filaments.colour = 'pinkish'

Mimosa_brevipinna.ginoecium = new Ginoecium()
Mimosa_brevipinna.ginoecium.ovary = new Ovary()

Mimosa_brevipinna.fruit = new Fruit()
Mimosa_brevipinna.fruit.stipe = new Stipe()
Mimosa_brevipinna.fruit.replum = new Replum()
Mimosa_brevipinna.fruit.epicarp = new Epicarp()

Mimosa_brevipinna.seed = new Seed()


// Description authorship
Mimosa_brevipinna.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_brevipinna.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa brevipinna
export { Mimosa_brevipinna }