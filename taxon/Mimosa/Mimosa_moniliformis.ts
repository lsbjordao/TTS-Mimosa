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


// Description of Mimosa moniliformis
const Mimosa_moniliformis = new Mimosa()
Mimosa_moniliformis.specificEpithet = 'moniliformis'

Mimosa_moniliformis.stems = new Stems()

Mimosa_moniliformis.stipule = new Stipule()
Mimosa_moniliformis.stipule.margin = new MarginStipule()
Mimosa_moniliformis.stipule.adaxial = new AdaxialStipule()
Mimosa_moniliformis.stipule.abaxial = new AbaxialStipule()

Mimosa_moniliformis.leaf = new Leaf()
Mimosa_moniliformis.leaf.petiole = new Petiole()
Mimosa_moniliformis.leaf.bipinnate = new Bipinnate()
Mimosa_moniliformis.leaf.bipinnate.rachis = new Rachis()
Mimosa_moniliformis.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_moniliformis.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_moniliformis.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_moniliformis.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_moniliformis.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_moniliformis.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(20, 60)
Mimosa_moniliformis.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_moniliformis.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_moniliformis.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_moniliformis.inflorescence = new Inflorescence()
Mimosa_moniliformis.inflorescence.peduncle = new Peduncle()
Mimosa_moniliformis.inflorescence.capitate = new CapitateInflorescence()

Mimosa_moniliformis.flower = new Flower()
Mimosa_moniliformis.flower.bracteole = new Bracteole()
Mimosa_moniliformis.flower.merism = '5-merous'
Mimosa_moniliformis.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_moniliformis.flower.calyx = new Calyx()
Mimosa_moniliformis.flower.corolla = new Corolla()
Mimosa_moniliformis.flower.corolla.shape = 'vase-shaped'

Mimosa_moniliformis.androecium = new Androecium()
Mimosa_moniliformis.androecium.filaments = new Filaments()
Mimosa_moniliformis.androecium.filaments.colour = ['pinkish', 'purplish']

Mimosa_moniliformis.ginoecium = new Ginoecium()
Mimosa_moniliformis.ginoecium.ovary = new Ovary()

Mimosa_moniliformis.fruit = new Fruit()
Mimosa_moniliformis.fruit.stipe = new Stipe()
Mimosa_moniliformis.fruit.replum = new Replum()
Mimosa_moniliformis.fruit.epicarp = new Epicarp()

Mimosa_moniliformis.seed = new Seed()


// Description authorship
Mimosa_moniliformis.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_moniliformis.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa moniliformis
export { Mimosa_moniliformis }