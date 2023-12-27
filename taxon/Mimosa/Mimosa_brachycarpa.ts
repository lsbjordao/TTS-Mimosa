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


// Description of Mimosa brachycarpa
const Mimosa_brachycarpa = new Mimosa()
Mimosa_brachycarpa.specificEpithet = 'brachycarpa'

Mimosa_brachycarpa.stems = new Stems()

Mimosa_brachycarpa.stipule = new Stipule()
Mimosa_brachycarpa.stipule.margin = new MarginStipule()
Mimosa_brachycarpa.stipule.adaxial = new AdaxialStipule()
Mimosa_brachycarpa.stipule.abaxial = new AbaxialStipule()

Mimosa_brachycarpa.leaf = new Leaf()
Mimosa_brachycarpa.leaf.petiole = new Petiole()
Mimosa_brachycarpa.leaf.bipinnate = new Bipinnate()
Mimosa_brachycarpa.leaf.bipinnate.rachis = new Rachis()
Mimosa_brachycarpa.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_brachycarpa.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_brachycarpa.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_brachycarpa.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_brachycarpa.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_brachycarpa.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(18, 30)
Mimosa_brachycarpa.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_brachycarpa.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_brachycarpa.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_brachycarpa.inflorescence = new Inflorescence()
Mimosa_brachycarpa.inflorescence.peduncle = new Peduncle()
Mimosa_brachycarpa.inflorescence.capitate = new CapitateInflorescence()

Mimosa_brachycarpa.flower = new Flower()
Mimosa_brachycarpa.flower.bracteole = new Bracteole()
Mimosa_brachycarpa.flower.merism = '4-merous'
Mimosa_brachycarpa.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_brachycarpa.flower.calyx = new Calyx()
Mimosa_brachycarpa.flower.calyx.shape = 'campanulate'
Mimosa_brachycarpa.flower.corolla = new Corolla()
Mimosa_brachycarpa.flower.corolla.shape = 'turbinate'

Mimosa_brachycarpa.androecium = new Androecium()
Mimosa_brachycarpa.androecium.filaments = new Filaments()
Mimosa_brachycarpa.androecium.filaments.colour = 'pinkish'

Mimosa_brachycarpa.ginoecium = new Ginoecium()
Mimosa_brachycarpa.ginoecium.ovary = new Ovary()

Mimosa_brachycarpa.fruit = new Fruit()
Mimosa_brachycarpa.fruit.stipe = new Stipe()
Mimosa_brachycarpa.fruit.replum = new Replum()
Mimosa_brachycarpa.fruit.epicarp = new Epicarp()

Mimosa_brachycarpa.seed = new Seed()


// Description authorship
Mimosa_brachycarpa.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_brachycarpa.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709349 
})


// Sources


// Export Mimosa brachycarpa
export { Mimosa_brachycarpa }