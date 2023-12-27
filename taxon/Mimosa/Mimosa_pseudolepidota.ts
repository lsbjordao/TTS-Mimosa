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


// Description of Mimosa pseudolepidota
const Mimosa_pseudolepidota = new Mimosa()
Mimosa_pseudolepidota.specificEpithet = 'pseudolepidota'

Mimosa_pseudolepidota.stems = new Stems()

Mimosa_pseudolepidota.stipule = new Stipule()
Mimosa_pseudolepidota.stipule.margin = new MarginStipule()
Mimosa_pseudolepidota.stipule.adaxial = new AdaxialStipule()
Mimosa_pseudolepidota.stipule.abaxial = new AbaxialStipule()

Mimosa_pseudolepidota.leaf = new Leaf()
Mimosa_pseudolepidota.leaf.petiole = new Petiole()
Mimosa_pseudolepidota.leaf.bipinnate = new Bipinnate()
Mimosa_pseudolepidota.leaf.bipinnate.rachis = new Rachis()
Mimosa_pseudolepidota.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_pseudolepidota.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_pseudolepidota.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_pseudolepidota.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_pseudolepidota.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_pseudolepidota.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_pseudolepidota.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(11, 24)
Mimosa_pseudolepidota.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_pseudolepidota.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_pseudolepidota.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_pseudolepidota.inflorescence = new Inflorescence()
Mimosa_pseudolepidota.inflorescence.peduncle = new Peduncle()
Mimosa_pseudolepidota.inflorescence.capitate = new CapitateInflorescence()

Mimosa_pseudolepidota.flower = new Flower()
Mimosa_pseudolepidota.flower.bracteole = new Bracteole()
Mimosa_pseudolepidota.flower.calyx = new Calyx()
Mimosa_pseudolepidota.flower.calyx.shape = 'paleaceous'
Mimosa_pseudolepidota.flower.corolla = new Corolla()

Mimosa_pseudolepidota.androecium = new Androecium()
Mimosa_pseudolepidota.androecium.filaments = new Filaments()

Mimosa_pseudolepidota.ginoecium = new Ginoecium()
Mimosa_pseudolepidota.ginoecium.ovary = new Ovary()

Mimosa_pseudolepidota.fruit = new Fruit()
Mimosa_pseudolepidota.fruit.stipe = new Stipe()
Mimosa_pseudolepidota.fruit.replum = new Replum()
Mimosa_pseudolepidota.fruit.epicarp = new Epicarp()

Mimosa_pseudolepidota.seed = new Seed()


// Description authorship
Mimosa_pseudolepidota.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_pseudolepidota.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709351 
})


// Sources


// Export Mimosa pseudolepidota
export { Mimosa_pseudolepidota }